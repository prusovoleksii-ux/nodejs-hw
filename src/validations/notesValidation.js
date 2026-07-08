import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';
import { TAGS } from '../constants/tags';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const getAllNotesSchema = {
  [Segments.BODY]: Joi.object({
    page: Joi.number().integer().min(1).default(1).required(),
    perPage: Joi.number().integer().min(5).max(20).default(10).required(),
    tag: Joi.string().valid(TAGS),
    search: Joi.string().allow(""),
  }),
};

export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteIdSchema: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const createNotesSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1),
    content: Joi.string(),
    tag: Joi.string().valid(TAGS),
  }),
};

export const updateNotesSchema = {
  [Segments.PARAMS]: Joi.object({
    noteIdSchema: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1),
    content: Joi.string(),
    tag: Joi.string().valid(TAGS),
  }),
};
