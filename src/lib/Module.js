
Module = window.Module || new Function();

(function() {

    this.component = function (name, callback) {

        var dependencies = app.resources.getDependencies(' ', getAruments(callback));

        app.resources.add(
            ' ', 
            name, 
            new function() {
                return callback.apply(this, dependencies);
            }
        );

    }

}.call(Module.prototype));
