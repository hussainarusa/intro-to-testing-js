

// test sayHello
describe('sayHello', () => {
    it('should be a defined function', () => {
        expect(sayHello).toBeDefined();
    });

    it('should return a string when called', () => {
        expect(typeof sayHello()).toEqual('string');
    });

    it('should return "Hello, Jane!"', () => {
        expect(sayHello("Jane")).toEqual("Hello, Jane!");
    });

    it('should return "Hello, Alex!"', () => {
        expect(sayHello("Alex")).toEqual("Hello, Alex!");
    });
    it('should return "Hello, Pat!"', () => {
        expect(sayHello("Pat")).toEqual("Hello, Pat!");
    });

});
