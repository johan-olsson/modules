



var app = function (name, dependencies) {
    
    if (dependencies instanceof Array) {

        if (app.resources.isApp(name))
            return console.error('Module: "%s" already exists.', name);

        var module = new Module();
        module.name = name;
        
        //app.resources.newApp(name, module, dependencies);
        //app.avalible.push(module);
    }

    if (!app.resources.isApp(name))
        return console.error('Module: "%s" does not exist.', name);

    //return app.resources.getApp(name)
}

app.resources = new Resources();




app('soke', [])
    .component('foo', function () {
        this.bar = 'foo';
    })


app('poke', [])
    .component('random', function () {
        this.hest = 'test';
    })

app('app', ['soke', 'poke'])
app('app')


.component('main', function (foo, random) {
    console.log(foo);
    console.log(random);
})


var component,
    template,
    decorator
