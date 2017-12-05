import { Module } from '@nestjs/common';
import {FooModule} from "./foo/foo.module";

@Module({
    modules: [FooModule],
})
export class ApplicationModule {}