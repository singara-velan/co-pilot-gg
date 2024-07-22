import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-circle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './d3-circle.component.html',
  styleUrl: './d3-circle.component.css',
})
export class D3CircleComponent implements OnInit {
  ngOnInit() {
    this.createCircularChart();
  }

  createCircularChart() {
    const data = [10, 20, 30, 40, 50];
    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select('app-d3-circle')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const pie = d3.pie<number>().value((d) => d);

    // Assuming you want the inner radius to be half of the outer radius
    const innerRadius = radius / 2;
    
    // Updated d3.arc() configuration for a donut chart
    const path: any = d3.arc().outerRadius(radius).innerRadius(innerRadius); // This line is modified
    
    const arc = svg.selectAll('arc').data(pie(data)).enter().append('g');
    
    arc
      .append('path')
      .attr('d', path)
      .attr('fill', (d: any, i: any) => color(i))
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .append('title') // Append a title element to serve as a tooltip
      .text((d: any) => `Value: ${d.data}`);
    
    arc
      .append('text')
      .attr('transform', (d: any) => `translate(${path.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text((d: any) => d.data);
    
    svg
      .append('text')
      .attr('x', 0)
      .attr('y', -radius - 20)
      .attr('text-anchor', 'middle')
      .text('D3 Donut Chart');
  }
}