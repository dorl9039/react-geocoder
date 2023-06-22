# Geocoding with React

Practice implementing forms and making API calls with React.

## User Story

As a curious traveler, I want to type in the name of a location and see its latitude and longitude determined by the LocationIQ API , so that I get accurate coordinates and avoid getting lost.

### Web app description

The web app  has a form, which includes:
* A text input field, where users will type their search query
* A submit button, which users will press when they're ready to search

The web app also displays:
* The search query itself (repeated outside the text field)
* The latitudinal coordinate of the search result
* The longitudinal coordinate of the search result

### Enhancements

The web app makes a call to a proxy server that uses the LocationIQ Search/Forward Geocoding API. In the case of an unsuccessful call, the web app does not crash but instead displays an error message.

The web app also includes a search history section that displays a list of all search queries that have been made, along with their latitude and longitude values. Results persist even after an invalid location search.