import React from 'react'


export default function SignUpForm({ handleSignupInput, handleSignupSubmit }) {
    return (
        <div>
            <form onSubmit={handleSignupSubmit}>
                <label><input name="username" placeholder="Your first name..." onChange={handleSignupInput}/></label>
                <label><input name="firstName" placeholder="Your first name..." onChange={handleSignupInput}/></label>
                <label><input name="lastName" placeholder="Your last name..." onChange={handleSignupInput}/></label>
                <label><input name="password" placeholder="Your password..." onChange={handleSignupInput}/></label>
                <button>Sign Up</button>
            </form>
        </div>
    )
}
