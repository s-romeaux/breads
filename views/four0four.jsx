const React = require('react')
const Def = require('./layouts/default')

function four0four () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Looks like this batch isn't quite ready yet. Appologies!</p>
                <img src="/public/images/error.png" alt="Fist punching unfinished dough." width="300" height="200"/> 
            </main>
        </Def>
    )
}

module.exports = four0four
