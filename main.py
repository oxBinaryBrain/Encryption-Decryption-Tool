
from cryptography.fernet import Fernet

def generate_key():
    return Fernet.generate_key()

def encrypt_message(message, key):
    f = Fernet(key)
    encrypted_message = f.encrypt(message.encode())
    return encrypted_message

def decrypt_message(encrypted_message, key):
    f = Fernet(key)
    decrypted_message = f.decrypt(encrypted_message).decode()
    return decrypted_message

def main():
    key = generate_key()
    print("Generated Key:", key.decode())

    message = input("Enter the message to encrypt: ")
    encrypted_message = encrypt_message(message, key)
    print("Encrypted message:", encrypted_message)

    decrypted_message = decrypt_message(encrypted_message, key)
    print("Decrypted message:", decrypted_message)

if __name__ == "__main__":
    main()
