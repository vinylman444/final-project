# Idle RPG

## Overview

An Idle game where the player fights waves of enemies with no input and upgrade their equipment to deal damage faster.
This game is based on clicker heroes.

## Data Model

This application will store Players, Enemies, Equipment, and Gold

* Players have an inventory where they keep equipment and gold
* Enemies have a drop table that determine the equipment and gold they drop and the probability assosiated

An Example Player:

```javascript
{
  username: "username",
  hash: // a password hash,
  gold: number
  inventory: // an array containing equipment
}
```

An Example Enemy:

```javascript
{
  name: "name",
  golddrop: number,
  droptable: // an array all possible drops
}
```


An Example Equipment:

```javascript
{
  name: "name",
  description: "this is a weapon",
  sellvalue: number,
  buyvalue: number,
  droprate: number,
  damage: number
}
```


## [Link to Commented First Draft Schema](db.mjs) 

(__TODO__: create a first draft of your Schemas in db.mjs and link to it)

## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/login - player login page

/game - page where the core gameplay occurs

/game/inventory - page to access and modify the player's inventory

/game/shop - page to buy and sell equipment

## Site map

(__TODO__: draw out a site map that shows how pages are related to each other)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(__TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://en.wikipedia.org/wiki/Use_case))

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can play the game by idling
4. as a user, I can purchase and sell equipment
5. as a user, I can modify my equipment inventory


## Research Topics

(__TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

* (5 points) Integrate user authentication
    * I'm going to be using passport for user authentication
    * And account has been made for testing; I'll email you the password
    * see <code>cs.nyu.edu/~jversoza/ait-final/register</code> for register page
    * see <code>cs.nyu.edu/~jversoza/ait-final/login</code> for login page
* (4 points) Perform client side form validation using a JavaScript library
    * see <code>cs.nyu.edu/~jversoza/ait-final/my-form</code>
    * if you put in a number that's greater than 5, an error message will appear in the dom
* (5 points) vue.js
    * used vue.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit)


## [Link to Initial Main Project File](app.mjs) 

(__TODO__: create a skeleton Express application with a package.json, app.mjs, views folder, etc. ... and link to your initial app.mjs)

## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)

