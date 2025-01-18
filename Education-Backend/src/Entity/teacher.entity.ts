import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Class } from './class.entity';  // Ensure correct import
import { Types } from 'mongoose';

@Schema()
export class Teacher extends Document {
  @Prop({ required: true })
  teacherName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  address: string;

  @Prop({ type: Types.ObjectId, ref: 'Class', required: true })
  class: Class;  // One-to-One relationship with Class (correct type and options)
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
