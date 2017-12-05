import {Module} from "@nestjs/common";
import {FooController} from "./foo.controller";

@Module({
    components: [],
    controllers: [FooController],
    modules: [ ]
})
export class FooModule {}