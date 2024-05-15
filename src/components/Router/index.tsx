import { Routes, Route, Navigate } from 'react-router-dom'
import { DefaultLayout } from '../../layouts/DefaultLayout';
import { Posts } from '../../pages/Posts';
import { PostDetail } from '../../pages/PostDetail';


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}