import { Schema, Document } from 'mongoose';

export interface Log {
  message: string;
  timestamp: Date;
}

export type LogDocument = Log & Document;

export const LogSchema = new Schema<LogDocument>({
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});