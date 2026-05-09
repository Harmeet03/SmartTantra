#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 10
#define RST_PIN 9
#define BUZZER_PIN 8

MFRC522 rfid(SS_PIN, RST_PIN);

void setup() {
    Serial.begin(9600);
    SPI.begin();

    rfid.PCD_Init();

    pinMode(BUZZER_PIN, OUTPUT);

    Serial.println("Listening...");
}

void loop() {

    // Detect card
    if (!rfid.PICC_IsNewCardPresent()) {
        return;
    }

    // Read card
    if (!rfid.PICC_ReadCardSerial()) {
        return;
    }

    Serial.print("");

    String tagID = "";

    for (byte i = 0; i < rfid.uid.size; i++) {

        Serial.print(rfid.uid.uidByte[i] < 0x10 ? "0" : "");
        Serial.print(rfid.uid.uidByte[i], HEX);

        tagID += String(rfid.uid.uidByte[i], HEX);
    }

    Serial.println();

    tagID.toUpperCase();

    // 🔊 Buzzer Beep
    tone(BUZZER_PIN, 1000); // 1000Hz sound
    delay(150);
    noTone(BUZZER_PIN);

    // Print UID
    Serial.println("Scanned UID: " + tagID);

    // Stop reading same card repeatedly
    rfid.PICC_HaltA();
}