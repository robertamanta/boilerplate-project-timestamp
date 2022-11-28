# Timestamp Microservice

[![Run on Repl.it](https://replit.com/badge/github/robertamanta/boilerplate-project-timestamp)](https://replit.com/new/github/robertamanta/boilerplate-project-timestamp)

This is my project of the Timestamp Microservice challenge for the freeCodeCamp API and Microservice certification.

# Documentation

1. The API endpoint is GET /api/:date_string?
2. A date string is valid if can be successfully parsed by new Date(date_string) (JS) .
3. An empty date parameter should return the current time.
4. If the date string is valid the api returns a JSON having the structure {"unix": <date.getTime()>, "utc" : <date.toUTCString()> } e.g. {"unix": 1669852800000 ,"utc": "Thu, 01 Dec 2022 00:00:00 GMT"}.
5. If the date string is invalid the api returns a JSON having the structure { error : "Invalid Date" }. 

# Usage:

1. https://boilerplate-project-timestamp-1.robertamanta.repl.co/api

2. https://boilerplate-project-timestamp-1.robertamanta.repl.co/api/2022-12-01

3. https://boilerplate-project-timestamp-1.robertamanta.repl.co/api/1669852800000
