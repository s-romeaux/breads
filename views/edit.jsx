const React = require('react')
const Default = require('./layouts/default')

function Edit ({bread, index}) {
    return (
        <Default>
            <h2>Update one of our bread selections here.</h2>
            <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    defaultValue={bread.name}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={bread.image}
                />
                <label htmlFor="baker">Baker</label>
                <select name="baker" id="baker" defaultValue={bread.baker}>
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
                    defaultChecked={bread.hasGluten}
                />
                <br />
                <input type="Submit" value="Update"/>
            </form>
        </Default>
    )
}
module.exports = Edit

