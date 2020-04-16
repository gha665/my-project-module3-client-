import React from 'react'


export default function LoginForm({ handleLoginInput, handleLoginSubmit }) {
    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                {/* <label><input name="firstName" placeholder="Your first name..." onChange={handleLoginInput}/></label>
                <label><input name="lastName" placeholder="Your last name..." onChange={handleLoginInput}/></label> */}
                <label><input name="email" placeholder="Your email..." onChange={handleLoginInput}/></label>
                <label><input name="password" type="password" placeholder="Your password..." onChange={handleLoginInput}/></label>
                <button>Login</button>
            </form>
        </div>
    )
}
