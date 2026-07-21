// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   TextField,
//   Button,
//   InputAdornment,
//   IconButton,
//   Alert,
//   CircularProgress,
// } from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';
// import PhoneIcon from '@mui/icons-material/Phone';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import { signup } from '../store/features/auth/authThunk';


// const Register = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     phone: '',
//   });

//   const [formErrors, setFormErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     // Clear error for this field when user starts typing
//     if (formErrors[name]) {
//       setFormErrors((prev) => ({
//         ...prev,
//         [name]: '',
//       }));
//     }
//   };

//   const validateForm = () => {
//     const errors = {};

//     // Full Name validation
//     if (!formData.fullName.trim()) {
//       errors.fullName = 'Full name is required';
//     } else if (formData.fullName.trim().length < 2) {
//       errors.fullName = 'Full name must be at least 2 characters';
//     }

//     // Email validation
//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       errors.email = 'Please enter a valid email address';
//     }

//     // Password validation
//     if (!formData.password) {
//       errors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }

//     // Phone validation
//     if (!formData.phone.trim()) {
//       errors.phone = 'Phone number is required';
//     } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
//       errors.phone = 'Please enter a valid phone number';
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       const result = await dispatch(signup(formData)).unwrap();
//       // Registration successful
//       console.log('Registration successful:', result);
//       navigate('/');
//     } catch (err) {
//       // Error is handled by Redux state
//       console.error('Registration failed:', err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full">
//         {/* Header */}
//         <div className="text-center mb-8 animate-fade-in-up">
//           <Link to="/" className="inline-flex items-center space-x-2 group mb-6">
//             <div className="p-3 bg-indigo-600 rounded-xl group-hover:bg-indigo-700 transition-colors">
//               <MenuBookIcon sx={{ fontSize: 32, color: 'white' }} />
//             </div>
//             <span className="text-3xl font-bold text-gray-900">Zosh Library</span>
//           </Link>
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
//           <p className="text-gray-600">Join our community of book lovers</p>
//         </div>

//         {/* Form Card */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up animation-delay-200">
//           {error && (
//             <Alert severity="error" className="mb-6">
//               {error}
//             </Alert>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Full Name Field */}
//             <div>
//               <TextField
//               fullWidth
//               label="Full Name"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               error={!!formErrors.fullName}
//               helperText={formErrors.fullName}
//               disabled={loading}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PersonIcon className="text-gray-400" />
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   '&:hover fieldset': {
//                     borderColor: '#4F46E5',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#4F46E5',
//                   },
//                 },
//                 '& .MuiInputLabel-root.Mui-focused': {
//                   color: '#4F46E5',
//                 },
//               }}
//             />
//             </div>

//             {/* Email Field */}
//             <div>
//               <TextField
//               fullWidth
//               label="Email Address"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               error={!!formErrors.email}
//               helperText={formErrors.email}
//               disabled={loading}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <EmailIcon className="text-gray-400" />
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   '&:hover fieldset': {
//                     borderColor: '#4F46E5',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#4F46E5',
//                   },
//                 },
//                 '& .MuiInputLabel-root.Mui-focused': {
//                   color: '#4F46E5',
//                 },
//               }}
//             />
//             </div>

//             {/* Password Field */}
//             <div>
//               <TextField
//               fullWidth
//               label="Password"
//               name="password"
//               type={showPassword ? 'text' : 'password'}
//               value={formData.password}
//               onChange={handleChange}
//               error={!!formErrors.password}
//               helperText={formErrors.password}
//               disabled={loading}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <LockIcon className="text-gray-400" />
//                   </InputAdornment>
//                 ),
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => setShowPassword(!showPassword)}
//                       edge="end"
//                       disabled={loading}
//                     >
//                       {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   '&:hover fieldset': {
//                     borderColor: '#4F46E5',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#4F46E5',
//                   },
//                 },
//                 '& .MuiInputLabel-root.Mui-focused': {
//                   color: '#4F46E5',
//                 },
//               }}
//             />
//             </div>

//             {/* Phone Field */}
//             <div>
//               <TextField
//               fullWidth
//               label="Phone Number"
//               name="phone"
//               type="tel"
//               value={formData.phone}
//               onChange={handleChange}
//               error={!!formErrors.phone}
//               helperText={formErrors.phone}
//               disabled={loading}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PhoneIcon className="text-gray-400" />
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   '&:hover fieldset': {
//                     borderColor: '#4F46E5',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: '#4F46E5',
//                   },
//                 },
//                 '& .MuiInputLabel-root.Mui-focused': {
//                   color: '#4F46E5',
//                 },
//               }}
//             />
//             </div>

//             {/* Submit Button */}
//             <div>
//               <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               disabled={loading}
//               sx={{
//                 bgcolor: '#4F46E5',
//                 color: 'white',
//                 py: 1.5,
//                 fontSize: '1rem',
//                 fontWeight: 600,
//                 textTransform: 'none',
//                 borderRadius: '0.75rem',
//                 '&:hover': {
//                   bgcolor: '#4338CA',
//                 },
//                 '&.Mui-disabled': {
//                   bgcolor: '#9CA3AF',
//                   color: 'white',
//                 },
//               }}
//             >
//               {loading ? (
//                 <div className="flex items-center space-x-2">
//                   <CircularProgress size={20} color="inherit" />
//                   <span>Creating Account...</span>
//                 </div>
//               ) : (
//                 'Create Account'
//               )}
//             </Button>
//             </div>
//           </form>

//           {/* Sign In Link */}
//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Already have an account?{' '}
//               <Link
//                 to="/login"
//                 className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
//               >
//                 Sign In
//               </Link>
//             </p>
//           </div>
//         </div>

//         {/* Terms and Privacy */}
//         <p className="mt-6 text-center text-sm text-gray-600 animate-fade-in-up animation-delay-400">
//           By creating an account, you agree to our{' '}
//           <Link to="/terms" className="text-indigo-600 hover:text-indigo-700">
//             Terms of Service
//           </Link>{' '}
//           and{' '}
//           <Link to="/privacy" className="text-indigo-600 hover:text-indigo-700">
//             Privacy Policy
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { signup } from '../store/features/auth/authThunk';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // ✅ FIELD STYLE (FIXED POSITION)
  const fieldStyle = {
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': { borderColor: '#374151' },
      '&:hover fieldset': { borderColor: '#2dd4bf' },
      '&.Mui-focused fieldset': { borderColor: '#2dd4bf' },
    },
    '& .MuiInputLabel-root': { color: '#9CA3AF' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#2dd4bf' },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await dispatch(signup(formData)).unwrap();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="w-full max-w-md">

        {/* HEADER */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl">
              <MenuBookIcon sx={{ fontSize: 30, color: 'white' }} />
            </div>
            <span className="text-2xl font-bold text-white">
              SmartLib Library
            </span>
          </Link>

          <h2 className="text-3xl font-bold text-white mb-2">
            Create Account
          </h2>
          <p className="text-gray-400">
            Join our community of book lovers
          </p>
        </div>

        {/* CARD */}
        <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-xl">

          {error && <Alert severity="error" className="mb-6">{error}</Alert>}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME */}
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={!!formErrors.fullName}
              helperText={formErrors.fullName}
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: '#9CA3AF' }} />
                  </InputAdornment>
                ),
              }}
              sx={fieldStyle}
            />

            {/* EMAIL */}
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: '#9CA3AF' }} />
                  </InputAdornment>
                ),
              }}
              sx={fieldStyle}
            />

            {/* PASSWORD */}
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              error={!!formErrors.password}
              helperText={formErrors.password}
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: '#9CA3AF' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={fieldStyle}
            />

            {/* PHONE */}
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!formErrors.phone}
              helperText={formErrors.phone}
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon sx={{ color: '#9CA3AF' }} />
                  </InputAdornment>
                ),
              }}
              sx={fieldStyle}
            />

            {/* BUTTON */}
            <Button
              fullWidth
              type="submit"
              disabled={loading}
              sx={{
                background: 'linear-gradient(to right, #14b8a6, #06b6d4)',
                color: 'white',
                py: 1.5,
                borderRadius: '12px',
                fontWeight: 600,
                '&:hover': { opacity: 0.9 },
              }}
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                'Create Account'
              )}
            </Button>

          </form>

          {/* LOGIN */}
          <p className="mt-6 text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-teal-400 hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        {/* FOOT */}
        <p className="mt-6 text-center text-sm text-gray-500">
          By creating an account, you agree to our{' '}
          <Link to="/terms" className="text-teal-400">Terms</Link> and{' '}
          <Link to="/privacy" className="text-teal-400">Privacy Policy</Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
