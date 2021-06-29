import { STATUSES } from '../constants';
import * as taskConstants from './../constants/task';

export const fetchListTask = (params = {}) => ({
  type: taskConstants.FETCH_TASK,
  payload: {
    params,
  },
});

export const fetchListTaskSuccess = (data) => ({
  type: taskConstants.FETCH_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const fetchListTaskFailed = (error) => ({
  type: taskConstants.FETCH_TASK_FAILED,
  payload: {
    error,
  },
});

export const filterTask = (keyword) => ({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword,
  },
});

export const filterTaskSuccess = (data) => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addTask = (title, description) => ({
  type: taskConstants.ADD_TASK,
  payload: {
    title,
    description,
  },
});

export const addTaskSuccess = (data) => ({
  type: taskConstants.ADD_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addTaskFailed = (error) => ({
  type: taskConstants.ADD_TASK_FAILED,
  payload: {
    error,
  },
});

export const setTaskEditing = (task) => ({
  type: taskConstants.SET_TASK_EDITING,
  payload: {
    task,
  },
});

export const updateTask = (title, description, status = STATUSES[0].value) => ({
  type: taskConstants.UPDATE_TASK,
  payload: {
    title,
    description,
    status,
  },
});

export const updateTaskSuccess = (data) => ({
  type: taskConstants.UPDATE_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const updateTaskFailed = (error) => ({
  type: taskConstants.UPDATE_TASK_FAILED,
  payload: {
    error,
  },
});

export const deleteTask = (id) => ({
  type: taskConstants.DELETE_TASK,
  payload: {
    id,
  },
});

export const deleteTaskSuccess = (data) => ({
  type: taskConstants.DELETE_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const deleteTaskFailed = (error) => ({
  type: taskConstants.DELETE_TASK_FAILED,
  payload: {
    error,
  },
});
