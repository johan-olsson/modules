
/* Return a list of arguments that
 * are accepted by passed function.
 */ 
function getAruments(func) {

    var argsRegexp = /\(([^\)]*)\)/;
    var metaRegexp = /((\/\/.*$)|(\/\*[\s\S]*?\*\/)|([\s\n]*))/mg;

    var string = func.toString()
        .replace(metaRegexp, '')
        .match(argsRegexp)[1];

    /* Make sure we don't end up with an 
     * array contaning an empty string
     * when no dependencies are requested.
     */ 
     return (string) ? string.split(',') : [];
}
