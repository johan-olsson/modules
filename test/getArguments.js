

describe('src/lib/getArguments.js', function () {

    it('should return a list of required arguments for function.', function () {
        expect(
            getAruments(function(foo, bar) {})
        ).toEqual(
            ['foo', 'bar']
        );
    });

    it('should return an empty array when no aruments exists.', function () {
        expect(
            getAruments(function() {})
        ).toEqual(
            []
        );
    });
    
    it('should remove comments tabs and line breaks correctly.', function () {
        expect(
            getAruments(
                function(
                    foo, // Some comment.
                    bar, /* Some comment. */
                    test    // tab
                ) {}
            )
        ).toEqual(
            ['foo', 'bar', 'test']
        );
    });
});



