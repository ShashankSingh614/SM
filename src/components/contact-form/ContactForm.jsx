// Contact form component with validation and submission handling
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { useForm } from '../../hooks/useForm';
import { validateForm } from '../../utils/validation';
import { courseOptions, roleOptions } from '../../data/courses';

const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    role: 'Student',
    course: 'Diploma In Advanced Graphic Designing & Ui/Ux Design',
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm(
    initialValues,
    validateForm,
    onSubmit
  );

  return (
    <section className={styles.ourCourses}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-left pt-4">
            <h1 style={{ color: '#FFF' }}>ENQUIRY FORM</h1>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-10">
            <div className={`${styles.connect} pl-5 pr-5`}>
              <form 
                name="queryForm" 
                onSubmit={handleSubmit}
                noValidate
                aria-label="Student enquiry form"
              >
                <div className="row">
                  {/* First Name */}
                  <div className="col-md-6 mt-5">
                    <div className="row">
                      <div className="col-md-4">
                        <label className="col-form-label" htmlFor="firstName">
                          First name *
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input 
                          type="text" 
                          className={`form-control ${errors.firstName ? styles.error : ''}`}
                          id="firstName"
                          name="firstName"
                          placeholder="First name" 
                          value={values.firstName}
                          onChange={handleChange}
                          required
                          aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        />
                        {errors.firstName && (
                          <span id="firstName-error" className={styles.errorText} role="alert">
                            {errors.firstName}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact */}
                  <div className="col-md-6 mt-5">
                    <div className="row">
                      <div className="col-md-4">
                        <label className="col-form-label" htmlFor="contact">
                          Contact *
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input 
                          type="tel" 
                          className={`form-control ${errors.contact ? styles.error : ''}`}
                          id="contact"
                          name="contact"
                          placeholder="Contact number" 
                          value={values.contact}
                          onChange={handleChange}
                          required
                          aria-describedby={errors.contact ? 'contact-error' : undefined}
                        />
                        {errors.contact && (
                          <span id="contact-error" className={styles.errorText} role="alert">
                            {errors.contact}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Last Name */}
                  <div className="col-md-6 mt-5">
                    <div className="row">
                      <div className="col-md-4">
                        <label className="col-form-label" htmlFor="lastName">
                          Last name *
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input 
                          type="text" 
                          className={`form-control ${errors.lastName ? styles.error : ''}`}
                          id="lastName"
                          name="lastName"
                          placeholder="Last name" 
                          value={values.lastName}
                          onChange={handleChange}
                          required
                          aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                        />
                        {errors.lastName && (
                          <span id="lastName-error" className={styles.errorText} role="alert">
                            {errors.lastName}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6 mt-5">
                    <div className="row">
                      <div className="col-md-4">
                        <label className="col-form-label" htmlFor="email">
                          Email *
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input 
                          type="email" 
                          className={`form-control ${errors.email ? styles.error : ''}`}
                          id="email"
                          name="email"
                          placeholder="Email address" 
                          value={values.email}
                          onChange={handleChange}
                          required
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <span id="email-error" className={styles.errorText} role="alert">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Role */}
                  <div className="col-md-6 mt-5">
                    <div className="row">
                      <div className="col-md-4">
                        <label className="col-form-label" htmlFor="role">
                          I am
                        </label>
                      </div>
                      <div className="col-md-8">
                        <select 
                          className="custom-select form-control" 
                          id="role"
                          name="role"
                          value={values.role}
                          onChange={handleChange}
                        >
                          {roleOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Course */}
                  <div className="col-md-6 mt-5">
                    <div className="row">
                      <div className="col-md-4">
                        <label className="col-form-label" htmlFor="course">
                          I want to learn
                        </label>
                      </div>
                      <div className="col-md-8">
                        <select 
                          className="custom-select form-control" 
                          id="course"
                          name="course"
                          value={values.course}
                          onChange={handleChange}
                        >
                          {courseOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="row">
                  <div className="col-md-12 mt-5">
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <button 
                          type="submit" 
                          className="btn btn-primary"
                          disabled={isSubmitting}
                          aria-describedby="submit-status"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                        <div id="submit-status" className="sr-only" aria-live="polite">
                          {isSubmitting ? 'Form is being submitted' : ''}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

ContactForm.defaultProps = {
  onSubmit: async (formData) => {
    // Default form submission handler
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        alert('Thank you for your enquiry! We will contact you soon.');
        resolve();
      }, 1000);
    });
  },
};

export default ContactForm;