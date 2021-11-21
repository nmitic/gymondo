## How to start the project?
Run the following commands in order:
```
yarn install //or just yarn
```
```
yarn dev //to start dev server
```
## Tech stack
- NextJS - for templates
- tailwindcss for styles

### Why NextJS?

It comes with server and client side rendering out of the box using hydration under the hood. This was really handy for the requirements which were provided for the following reasons:

- Workouts should be index by search engines thus having server side is still needed
- Filtering and browsing workouts should be smooth experience thus client side is more preferable.
- Routing comes out of the box

## Why there is no shared state management tool being used?
There is no reason to use any shared state lib (Redux for example) as long as the state you are handling does not need to be shared. Nothing is wrong with using local state even along side with shared state, as long there is no crazy amounts of prop drilling and as long as only few components needs to share the same state there is no really a need for pulling in such complex state management tool as Redux is. 

However, Redux shines when it comes to UI state predictability. And if the requirements were different Redux might have been my choice (or some other state management lib)

## From where does the date come from?

Being able to manage workouts got me thinking that this is nothing more then CMS website. There should be a ways to manage the content.

Any headless CMS would work, as I already have some experience with GraphCMS, I decided to cut the corners and make use of it.

Why headless CMS? Having content layer decoupled from your templates is always great :)

Please note that I am using free plan for GraphCMS, if something is not working pe patient and refresh the page couple of time, thank you :)

## How do I generate data?
Under `graphQl/scripts/createWorkouts` there is a script which you can run to generate even more data. It will create random data entries using graphQL mutation.

## Folder structure, why does it look like that?
Idea is to loosely couple UI component with NextJS. So that Next JS is only responsible for what it does the best, server/client rendering and routing.

Every component should be scoped to a place where it is being used. Only where there are more places which consume the component only then it should live inside the `/shared` dir.

Example for workouts module.

```
-- workouts
  -- pagination
  -- workout-filter
  -- workout-tile
  workout.jsx
  workout.query.js
  workout.request.js
```

`<Pagination />`, `<WorkoutFilter />` and `<WorkoutTile />` are components which are used in `<Workouts />` thus they are direct its child in folder structure.

`workouts.query` and `workouts.request` are responsible for providing API for the `<Workouts />` component in a way that it will only fetch the data, but not handle errors and any state.

That way consumer of the `<Components />` can decide what to do with error state.

In this case it is handled under `pages/workouts/index.js`


## Why I have not used UI lib?
I wanted to move a bit faster, so I decided to write my own UI components and also demonstrate how would I build my own UI cpm. By no means I can say that what I build is prod ready, I hope you will only take it as an idea.

## What would I done different if this would need to go to production?

- There is no auth for GraphCMS, anyone can fetch the data, and even make mutations. I did not auth request just for the reason to move faster.

- I am missing no result found page in cases where results does not match filter criteria.

- Error handling is in place but it is not prod ready. There should be some sort of error logging in place, also crazy amount of destructuring I am doing is not very stable. 

- To further decouple modules from its usage context there should be `<Layout />` component implemented. Then will make use of `slot` to render the components, and their purpose would be to handle layouting of the components, meaning all classNames for grid should not be used on modules itself but should be done on layout component.

Example layout component for workout page could look like this:

```
const Layout = ({filter pagination}) => (
  <div className="grid-layout-styles">
    <div className="grid-layout-styles">{filter}</div>
    <div className="grid-layout-styles">{pagination}</div>
  <div>
)
```

- There is no type checking of any sort! :(
  I really hope you do not mind, I was trying to move as fast as I could due the fact that I was already off from my original delivery date. At lest react prop type should be used if not type script. Not the same thing, but even run time type checking can add a bit of value.

- Documenting modules

Using Storybook for example :)

- Will not use tailwindcss!!!

I have never used `tailwindcss` and wanted to give it a try since it is creating a lot of fuss recently. And I have to say I do not like it. Render methods look terrible with so many class names. It does not feel like you are writing styles. But it does shines when you want to move fast, it is faster then making use of some UI lib, so it is great for prototyping.

- Would add response styles

Please do not look at mobile design. :)
- Would add unit test

Using react test lib, or any other tool, with the focus on testing render method of the components and its func from the perspective of user, not testing if UI state is corrects but rather what us being rendered on the screen

- Would add few code comments here and there

I do not think that commenting every line is needed, it is a sign that your code if not clear enough, however nothing is wrong with few comments explaining why certain logic is implemented in a way that it is.

- And many other things :)
