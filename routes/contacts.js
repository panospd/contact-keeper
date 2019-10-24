const express = require('express');
const router = express.Router();

// @route   Get api/contacts
// @desc    Get all user contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get user contacts');
});

// @route   Post api/contacts
// @desc    Add new contact for user
// @access  Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route   Put api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route   Delete api/contacts/:id
// @desc    delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
