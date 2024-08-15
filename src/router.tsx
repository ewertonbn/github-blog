import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/defaultLayout'
import { Home } from './pages/home'
import { Post } from './pages/post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
      </Route>
    </Routes>
  )
}
