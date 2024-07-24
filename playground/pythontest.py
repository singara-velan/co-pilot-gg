import pytest
from unittest.mock import patch
from powershellToPython import fetch_users

@patch('powershellToPython.requests.get')
def test_fetch_users_success(mock_get):
	mock_get.return_value.status_code = 200
	mock_get.return_value.json.return_value = [{"id": 1, "name": "John Doe"}]

	result = fetch_users()
	assert result == [{"id": 1, "name": "John Doe"}], "The function should return user data on success."

@patch('powershellToPython.requests.get')
def test_fetch_users_failure(mock_get):
	mock_get.return_value.status_code = 404

	result = fetch_users()
	assert result is None, "The function should return None on failure."