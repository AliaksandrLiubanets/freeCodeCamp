// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    let lookup = {}
    lookup['alpha'] = "Adams"
    lookup.bravo = "Boston"
    lookup.charlie = "Chicago"
    lookup.delta = 'Denver'
    lookup.echo = 'Easy'
    lookup.foxtrot = 'Frank'

    result = lookup[val]

    // Only change code above this line
    return result;
}

phoneticLookup("charlie");