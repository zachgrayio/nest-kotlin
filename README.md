## nest-kotlin

A proof-of-concept project exploring interop between NestJS, TypeScript and KotlinJS.

## Overview

### What It Does

Demonstrates a Kotlin-first code sharing mechanism, where data models and business logic can be defined in Kotlin and utilized in Nest.

### What it Doesn't Do

Interaction with TypeScript files from Kotlin is not currently supported and as a result, neither is definition of Nest modules & controllers in Kotlin.

## Example

##### foo.kt
```kotlin
package foo

fun getFoo():String {
    return "Foo!"
}
```

##### foo.controller.ts
```typescript
import * as interop from "interop"

@Controller()
export class FooController {
    constructor() {}

    @Get('foo')
    async get(@Request() req, @Response() res, next) {
        res.status(HttpStatus.OK).send(interop.foo.getFoo());
    }
}
```

## How It Works

- Interoperation is achieved by targeting JS when compiling Kotlin, and then generating TypeScript definitions for the JS output. 
- The project can be built and run with `npm start` and `npm run start:prod` similar to the other starter repos. 
- Kotlin is compiled to JS via Gradle and the included Gradle wrapper. KotlinJS configuration can be seen in `build.gradle`. 
- The NPM scripts which define the build process can be viewed in `package.json`

#### Build Process

1. Compiles Kotlin to JS by calling `./gradlew assemble`, outputting a CommonJS module that's ready to use with Node
2. Calls `dtsmake` to generate typings from the JS output, complete with realistic types thanks to type inference
3. Uses `shx` to copy the JS output to `npm_modules` so it can be imported by Node - this could use a second look.
4. Calls `tsc`
5. Runs with `node index.js` or `node dist/server.js`

## Dependencies

In addition to NPM, the JRE/JDK will also be required to run the gradle build and compile the Kotlin code. Use of IntelliJ IDEA is highly recommended for working with Kotlin. 

## Should I Use This?

Probably not.