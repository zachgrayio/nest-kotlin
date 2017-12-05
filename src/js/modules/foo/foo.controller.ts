///<reference path="../../interop/interop.d.ts"/>

import {Controller, Get, HttpStatus, Request, Response} from "@nestjs/common";
import * as interop from "interop"

@Controller()
export class FooController {
    constructor() {}

    @Get('foo')
    async get(@Request() req, @Response() res, next) {
        res.status(HttpStatus.OK).send(interop.foo.getFoo());
    }
}