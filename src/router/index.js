import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import DashboardLayout from '../views/layouts/DashboardLayout.vue'
import DashboardHome from '../views/DashboardHome.vue'
import MyCourses from '../views/MyCourses.vue'
import CourseDetail from '../views/CourseDetail.vue'
import Assignments from '../views/Assignments.vue'
import AssignmentDetail from '../views/AssignmentDetail.vue'
import Certificates from '../views/Certificates.vue'
import CertificateDetail from '../views/CertificateDetail.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardHome,
        },
        {
          path: 'courses',
          name: 'my-courses',
          component: MyCourses,
        },
        {
          path: 'courses/:id',
          name: 'course-detail',
          component: CourseDetail,
        },
        {
          path: 'assignments',
          name: 'assignments',
          component: Assignments,
        },
        {
          path: 'assignments/:id',
          name: 'assignment-detail',
          component: AssignmentDetail,
        },
        {
          path: 'certificates',
          name: 'certificates',
          component: Certificates,
        },
        {
          path: 'certificates/:id',
          name: 'certificate-detail',
          component: CertificateDetail,
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile,
        },
      ],
    },
  ],
})

export default router
