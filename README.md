# NodeJS Source Maps Performance Test

This is a minimal example to reproduce the issue
[--enable-source-maps is unnecessarily slow with large source files](https://github.com/nodejs/node/issues/41541)
in a close to real world scenario.

## Prerequisites
* [Node](https://nodejs.org/en/) Version v16.13.2 (should also work with any other version that has `--enable-source-maps`)
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

## Steps to reproduce
* Run `yarn install`
* Run `yarn build`
* Run `yarn start-bundle`
* In a new terminal run `yarn artillery`

Instead of `yarn start-bundle` there are also `yarn start-without-source-maps`, `yarn start-unbundled`
and `yarn start-bundle-with-source-map-support`. Just run artillery against the different versions
to see the differences in performance.

Artillery is set to do 20 req/sec for 1 minute. This should show the effect, however for really fast machines
the `arrivalRate` of the load phase in `artillery.yaml` could be slightly increased.
