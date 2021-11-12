# Heavy Things

## Tech Stack
* Postgres
* Express
* Node.JS

---
## Wireframes
* Home Page

* Exercise Search Based on Muscle Worked

* Workout Log

---
## API
* wger Workout Manager

---
## ERD

---
## Examples of API Data
API root = https://wger.de/api/v2/
* Exercise = exercise/
     1. Name = results.name
     2. Description = results.description
     3. Muscle group = results.category
     4. Primary muscle = results.muscles
     5. Secondary muscles = results.muscles_secondary
* Image = exerciseimage/
     1. Image = results.image
* Muscle Group = exercisecategory/
     1. id = results.id
     2. name = results.name
* Muscles = muscle/
     1. id = results.id
     2. name = results.name
* Cues = exercisecomment/
     1. id = results.id
     2. name = results.name
     3. cue = results.comment

---
## MVP
* 

---
## Stretch Goals
* Use a second API to call for inspirational fitness quotes
* Create a workout tracker for users

---
## Potential Roadblocks
* Some of the data returned might be in German