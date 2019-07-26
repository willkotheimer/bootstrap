import { Component } from 'react';

import Teacher, { promote } from './modules/teacher'

const teacher = new Teacher("Will", "Computer Science");

teacher.teach();