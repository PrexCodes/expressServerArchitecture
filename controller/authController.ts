import express, { Application, Request, Response } from "express";
import cors from "cors";
import crypto from "crypto";
import { iUser } from "../utils/interfaces";


let data: iUser[] = [];

export const register =(req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
      const ID = crypto.randomUUID();

      const newuser = { id: ID, name, email, password };
      data.push(newuser);

      return res.status(201).json({
        message: "Created successfully",
        data: newuser,
      });
    } catch (error) {
      res.status(404).json({
        message: "You hit the Auth Endpoint",
        data: error,
      });
    }
  }

  export const getUsers =(req: Request, res: Response) => {
    try {
      return res.status(201).json({
        message: "List of Users",
        data: data,
      });
    } catch (error) {
      res.status(404).json({
        message: "You hit an-error",
        data: error,
      });
    }
  }
  export const singleUser =(req: Request, res: Response) => {
    try {
      const { id } = req.params;
      console.log(id);

      const newData = data.filter((el: iUser) => {
        return el.id === id;
      });

      return res.status(201).json({
        message: "Showing Just " + newData[0].name,
        data: newData,
      });
    } catch (error) {
      res.status(404).json({
        message: "You hit the Auth Endpoint",
        data: error,
      });
    }
  }

  export const loginUser =(req: Request, res: Response) => {
    try {
      const { email } = req.body;
      data.filter((el) => {
        if (el.email === email) {
          return res.status(201).json({
            message: "Log in Successfully",
            data: el,
          });
        } else {
            res.status(404).json({
                message: "No-User exists",
                data: 'No-Such-User',
              });
        }
      });
    } catch (error) {
      res.status(404).json({
        message: "You hit the Auth Endpoint",
        data: error,
      });
    }
  }
 