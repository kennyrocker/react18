import {useState} from "react";

interface LoginForm {
    username: string;
    password: string;
}

export default function Login() {

    const [form, setForm] = useState<LoginForm>({ username: '', password: '' });

    const handleForm = (event: any) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        })
        console.log(form);
    }

    return (
        <div className="login">
            <div className="username">
                <label htmlFor="username">user name:</label>
                <input type="text" id="username" value={form.username} onChange={handleForm}/>
            </div>
            <div className="password">
                <label htmlFor="password">password:</label>
                <input type="text" id="password" value={form.password} onChange={handleForm}/>
            </div>
            <button>Login</button>
        </div>
    )
}

