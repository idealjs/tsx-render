import "reflect-metadata";
import { Container, decorate, injectable } from "inversify";
import Corn from "./Corn";
import TYPES from "./types";
import Reactive from "@idealjs/reactive";

var container = new Container();
decorate(injectable(), Reactive);

container.bind<Corn>(TYPES.Corn).to(Corn);
container.bind<Reactive>(TYPES.Reactive).to(Reactive);

export default container;
