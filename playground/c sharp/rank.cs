namespace RankLegacyLogic {

    public class IndexedValue {
        public int index { get; set; }

        public decimal value { get; set; }

        public decimal weight { get; set; }

        public IndexedValue(int index, decimal value, decimal weight) {
            this.index = index;
            this.value = value;
            this.weight = weight;
        }
    }

    public class WeightedValue {
        public decimal Value { get; set; } 
        public decimal Weight { get; set; }

        public WeightedValue() {}

        public WeightedValue(decimal value, decimal weight = 1) {
            Value = value;
            Weight = weight;
        }
    }

    public WeightedValue(IndexedValue indexedValue) {
        Value = indexedValue.value;
        Weight = indexedValue.weight;
    }

    public (decimal lower, decimal upper) GetPercentileRank(this List<WeightedValue> input, decimal targetValue, bool need2Reverse = false) {
        if(!input.Any()) {
            return (0, 0);
        }

        var values = input.AdjustWeightToRelativeIntegerApproximates();

        var sortedList = need2Sort
            ? values.OrderBy(x => x.Value).ToList()
            : values;

        var target = need2Reverse
            ? 1 - (decimal)targetPercentile
            : (decimal)targetPercentile;

        if(target <= 0) {
            return sortedList.First().Value;
        }

        if(target >= 1) {
            return sortedList.Last().Value;
        }

        var weightSum = sortedList.Sum(x => x.Weight);
        var percentileIncrementPerUnitWeight = 1 / (weightSum - 1);
        decimal lowerPercentile =0, upperPercentile = 0;
        decimal? previousValue = null;

        foreach(var weightedValue in sortedList) {
            var isInterpolationRegion = target < lowerPercentile;
            if(isInterpolationRegion) {
                return ((target - upperPercentile)/(lowerPercentile - upperPercentile) * (weightedValue.Value - previousValue.Value) + previousValue.Value);
            }

            upperPercentile = lowerPercentile + (percentileIncrementPerUnitWeight * (weightedValue.Weight - 1));

            if(target == lowerPercentile || target == upperPercentile || (target > lowerPercentile && target < upperPercentile)) {
                return weightedValue.Value;
            }

            previousValue = weightedValue.Value;
            lowerPercentile = upperPercentile + percentileIncrementPerUnitWeight;
        }
    }

    private List<WeightedValue> AdjustWeightToRelativeIntegerApproximates(this List<WeightedValue> input) {
        var groupedValues = input
            .GroupBy(x => x.Value)
            .Select(x => new WeightedValue(x.Key, x.Sum(y => y.Weight)));

        var areAllWeightsIntegers = groupedValues.All(x => x.Weight % 1 == 0).All(y => y == 0);
        var multiplier = areAllWeightsIntegers ? 1 : 1000;

        return groupedValues.Select(x => new WeightedValue(x.Value, Math.Round(x.Weight * multiplier, MidpointRouding.AwayFromZerio))).ToList();
    }
}