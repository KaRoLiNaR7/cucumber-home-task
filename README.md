# evolution-bootcamp-cucumber-home-task


## Create a set of scenarios for the following training examples:
1. https://the-internet.herokuapp.com/add_remove_elements/
2. https://the-internet.herokuapp.com/checkboxes
3. https://the-internet.herokuapp.com/key_presses
4. https://the-internet.herokuapp.com/login
5. https://the-internet.herokuapp.com/hovers

## Homework requirements
### For Feature files:
- write scenarios that would cover functionality for the each of mentioned examples above
- scenarious should be written in the files with `.feature` extension which are located under `/features/`
- try to add scenarios outlines with `Examples` where possible
- tests need to have a proper Gherkin syntax with `Given-When-Then` structure
- add possibility to run different specs (feature files) by using appropriate tags

### For step implementation files:
- write step definition file(s) with `.js` extension under `/features/step-definitions/`
- implement the steps for all your features (write the code in `.js` files mentioned above)

## Homework will be considered as done:
- all 5 training examples are covered with features files
- steps used in the feature files are implemented
- your tests pass
- tests have a proper Gherkin syntax with `Given-When-Then` structure
- feature files and step implementation files are pushed to your repository

### When all is done please write an e-mail to 'ltidena@evolution.com'
```text
To: 'ltidena@evolution.com'
Subject: Hometask: [Name] [Surname]
Body: [Link to your github repository]
```

If you have any questions or will encounter any problems, do not hesitate ask mentors for help.

### File structure example:

```
- features
   - add_remove_elements.feature
   - checkboxes.feature
   - key_presses.feature
   - hovers.feature
   - step-definitions
      - common_steps.js
      - add_remove_elements.js
      - ...
```

## Tests
- Run `yarn install` to install all dependencies.
- Run `yarn test` to run your tests.
- The console output will show you the result.

### Good luck!
## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Submit Solution` link on <a href="https://app.codescreen.com/candidate/d27656d6-149d-4573-993c-275c1d5929c5" target="_blank">this screen</a>.