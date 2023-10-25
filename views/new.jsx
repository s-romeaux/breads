const React = require('react')
const Default = require('./layouts/default')

function New () {
    return (
    <Default>
        <h2>Add a new bread</h2>
        <form action="/breads" method="POST">
        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"
            id="name"
            required
        />

        <label htmlFor="image">Image</label>
        <input
            type="text"
            name="image"
            id="image"/>
            
            <label htmlFor="baker">Baker</label>
            <select name="baker" id="baker">
            <option value="Big Bird">Big Bird</option>
            <option value="Elmo">Elmo</option>
            <option value="Cookie Monster">Cookie Monster</option>
            <option value="Oscar the Grouch">Oscar the Grouch</option>
            </select>

        <label htmlFor="hasGluten">Has Gluten?</label>
        <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
        />
        <br />
        <input type="submit"/>
        </form>
        <div className="backButton">
<a href="/breads"><button>Go back to the index</button></a>
</div>

    </Default>
    )
}

module.exports = New