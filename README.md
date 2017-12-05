## nest-kotlin

A proof-of-concept project exploring interop between TypeScript and KotlinJS.

## Overview

This is a simple proof-of-concept which demonstrates the definition of business logic in Kotlin which can then be utilized by NestJS. Interacting with TypeScript files from Kotlin is not supported, and it's also not currently possible to define Nest modules or controllers in Kotlin.

Additionally, the interoperation is achieved by targeting JS when compiling Kotlin, and then generating TypeScript definitions for the JS output. With the recent progress on WebAssembly support within Kotlin Native, it seems there will likely be a better way of achieving this in the near future. 

### Build Process
The project can be built and run with `npm start` and `npm start:prod` similar to the other starter repos. Kotlin is compiled to JS via Gradle and the included Gradle wrapper. KotlinJS configuration can be seen in `build.gradle`. The NPM scripts which define the build process can be viewed in `package.json`

#### Steps
1. Compiles Kotlin to JS by calling `./gradlew assemble`, outputting a CommonJS module that's ready to use with Node
2. Calls `dtsmake` to generate typings from the JS output, complete with realistic types thanks to type inference
3. Uses `shx` to copy the JS output to `npm_modules` so it can be imported by Node - this could use a second look.
4. Calls `tsc`
5. Runs with `node index.js` or `node dist/server.js`

## Dependencies

In addition to NPM, the JRE/JDK will also be required to run the gradle build and compile the Kotlin code. Use of IntelliJ IDEA is highly recommended for working with Kotlin. 


## Should I Use This?

Probably not. 