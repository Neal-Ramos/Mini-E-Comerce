import { Kafka } from "kafkajs";


const kafka = new Kafka({
    clientId: "api-gateway",
    brokers: ["localhost:9092"]
})
export const producer = kafka.producer()

export async function ConnectProducer() {
    await producer.connect()
}

export async function publishEvent(topic: string, message: string) {
    await producer.send({
        topic,
        messages: [{value: JSON.stringify(message)}]
    })
}