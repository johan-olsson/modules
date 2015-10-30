

describe('src/lib/resources.js', function () {
    
    app.resources.newApp('test')
    
    it('return true if resource exists ', function () {
        expect(
            app.resources.isApp('test')
        ).toEqual(
            true
        );
    });
});


