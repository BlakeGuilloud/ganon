## Contributing

Thank you for contributing to Ganon! We thrilled to have developers of all levels help improve the project. Before contributing, please read our [Objective](https://github.com/BlakeGuilloud/ganon/blob/master/README.md#objective).

### Getting Started
  * Make sure you have [NodeJS](https://nodejs.org/) installed.
  * Make sure you have [Yarn](https://yarnpkg.com/) installed. While you are welcome to use npm for package management, the package-lock.json file is intentionally gitignored in favor of yarn.
  * Fork the repository on GitHub.
  * Run the command `yarn install` at the root of your local `ganon/` directory to install dependencies.

### Claiming an Issue
  * [View Issues](https://github.com/BlakeGuilloud/ganon/issues) that are currently seeking help from the community.
  * Find a method, a bug, or a new feature that you wish to work on.
  * Please refrain from working on issues that have the label "in progress" applied to them.
  * Mention me in a comment of the respective issue: "@BlakeGuilloud I would like to work on this".
  * The "in progress" label will be applied to the issue, and you will be given 24 hours to complete the task. If you need more time, please @BlakeGuilloud me and I will happily oblige.

### Resolving an Issue
  * Find the method you wish to resolve- the file will live in `lib/[methodName].js`.
  * Fix the method.
  * Run a test on the method: `yarn test [methodName]` or `yarn test:watch [methodName]` to run tests on every file save. If the tests pass, awesome job!
  * Look over the method's test file in `test/[methodName].test.js` to make sure there are no potential edge cases that were not considered when the tests were conceived.

### Creating a Skeleton Method
This is THE most important step in the [Ganon Objective](https://github.com/BlakeGuilloud/ganon/blob/master/README.md#objective). For each issue you resolve, you must create one for someone else to work on!
  * Come up with a method that you would like to see implemented into the project.
  * Create a new file in the `lib` directory called `[methodName].js`.
  * Write the skeleton of your method, leaving the business logic for someone else!
  * Create a new file in the `test` directory called `[methodName].test.js`.
  * Write a few tests to describe your skeleton method using the [Jest Framework](http://facebook.github.io/jest/).

### Creating a Pull Request
Now that we have claimed an issue, resolved that issue, and created a skeleton method, we can open up a pull request!
  * Run the command `yarn lint` to confirm that the code you have introduced meets our linting standards (See .eslintrc for details).
  * Pull in the latest master branch from the project. It may have updated since you started work on your issue.
  * Resolve any merge conflicts that may have occurred during the development process.
  * Push all of the work you have done to your fork on GitHub.
  * Open a [Pull Request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) in the master branch.
  * Use the [Pull Request Template](https://github.com/BlakeGuilloud/ganon/blob/master/PULL_REQUEST_TEMPLATE.md) as the description of your pull request.

### Giving Back
Thank you so much for contributing to Ganon! We are trying to build a community that encourages people of all skill levels to get involved in open source software- it is the best. We do ask that if your pull request is merged in, please create a new [Issue](https://github.com/BlakeGuilloud/ganon/issues) for the skeleton method you have introduced- it helps us out a ton! (The [Issues Template](https://github.com/BlakeGuilloud/ganon/blob/master/ISSUE_TEMPLATE.md) can be found at the root of the repository.) While the typical contributing process encourages contributors to first discover an issue, this does NOT mean we are unwilling to accept methods that are not listed on our issues page. If you want to see a method implemented that is not listed in our [Current Issues](https://github.com/BlakeGuilloud/ganon/issues), please do not hesistate to introduce something new! But just remember, for each method you introduce to the project, please provide a skeleton for someone else to work on! Give this repository a Star to keep up with it's progress! Thank you all so much.
