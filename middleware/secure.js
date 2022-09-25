export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.mdLogin) {
      return redirect('/auth/logout')
    }
  }