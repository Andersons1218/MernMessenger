import { Component } from 'react'
import { signUp } from '../../utilities/users-service.js'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    // The object passed to setState is merged with the current state object
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            // We don't want to send the 'error' or 'confirm' property,
            //  so let's make a copy of the state object, then delete them
            const formData = { ...this.state }
            delete formData.error
            delete formData.confirm
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await signUp(formData)
            this.props.setUser(user)
        } catch {
            // If an error occurred
            this.setState({ error: 'Sign Up Failed - Try again' })
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div class="w-full max-w-xs" onSubmit={this.handleSubmit} >
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='name' type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='email' type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                            <p class="text-red-500 text-xs italic">Please choose a password.</p>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm">
                                Confirm
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="confirm" type="password" placeholder="password" value={this.state.confirm} onChange={this.handleChange} />
                            <p class="text-red-500  text-xs italic">confirm password.</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disable={disable} type="submit">
                                    Sign up
                                </button>
                            </div>
                            </div>
                             </form>
                            </div>
              
        );
    }
}