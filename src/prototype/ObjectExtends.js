
Object.prototype.extends = function () {
    var self = this;
    Array.prototype.splice.call(arguments, 0).forEach(function (constructor) {

        constructor.call(self)

    })
    return self;
}
