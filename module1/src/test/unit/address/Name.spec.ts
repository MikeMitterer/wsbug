// import 'jest-extended';
import { Name } from "../../../main";
// import { loggerFactory } from '../../main/config/ConfigLog4j';

describe("Name", () => {
    // const logger = loggerFactory.getLogger('test.Name');

    test("Create", () => {
        const name = new Name("Mike", "Mitterer");
        expect(name.fullname).toBe("-Mike Mitterer-");
    });

});
