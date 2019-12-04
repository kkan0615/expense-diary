export default function ({store, redirect}) {
    if(!store.state.users.me) {
        alert('Login is required');
        redirect('/');
    }
}