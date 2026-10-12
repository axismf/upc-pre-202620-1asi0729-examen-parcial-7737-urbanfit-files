import {BaseEntity} from '../../../shared/domain/model/base-entity';

export class Reservation implements BaseEntity {
  #id: number;
  #activityType: 'fitness' | 'yoga' | 'swimming' | 'cycling';
  #sportsCenterId: number;
  #participantName: string;
  #participants: number;
  #weatherTemperature: number;
  #reservedAt: string;

  constructor(props:{id: number, activityType: 'fitness' | 'yoga' | 'swimming' | 'cycling', sportsCenterId: number, participantName: string, participants: number, weatherTemperature: number, reservedAt: string}) {
    this.#id = props.id;
    this.#activityType = props.activityType;
    this.#sportsCenterId = props.sportsCenterId;
    this.#participantName = props.participantName;
    this.#participants = props.participants;
    this.#weatherTemperature = props.weatherTemperature;
    this.#reservedAt = props.reservedAt;
  }

  get id(): number {
    return this.#id;
  }

  set id(value: number) {
    this.#id = value;
  }

  get activityType(): 'fitness' | 'yoga' | 'swimming' | 'cycling' {
    return this.#activityType;
  }

  set activityType(value: 'fitness' | 'yoga' | 'swimming' | 'cycling') {
    this.#activityType = value;
  }

  get sportsCenterId(): number {
    return this.#sportsCenterId;
  }

  set sportsCenterId(value: number) {
    this.#sportsCenterId = value;
  }

  get participantName(): string {
    return this.#participantName;
  }

  set participantName(value: string) {
    this.#participantName = value;
  }

  get participants(): number {
    return this.#participants;
  }

  set participants(value: number) {
    this.#participants = value;
  }

  get weatherTemperature(): number {
    return this.#weatherTemperature;
  }

  set weatherTemperature(value: number) {
    this.#weatherTemperature = value;
  }

  get reservedAt(): string {
    return this.#reservedAt;
  }

  set reservedAt(value: string) {
    this.#reservedAt = value;
  }
}
