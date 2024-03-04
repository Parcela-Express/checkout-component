import crypto from 'crypto';

export function encryptData(data) {
  if (!data) {
    return;
  }
  const stringData = JSON.stringify(data);
  const bufferCriptografado = crypto.publicEncrypt(
    {
      key: `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAt0znDSWIHSIfIyD2XhDo
L5SH2EWg5922hQQkQPOAKTB7kkyuHBSyFyI9KkExNJ5NaksEgPCilVUUMcS5f+DL
EQ7kk1jUw8DHAHS7MQvrsGBM+tP7XRztaW/IN+KiNaef4OUAZGV1pzkW3kslguSs
Qh24ea+P0hgXo9krhsAeWLqS6Ib889HThdYlLStR2yJq4UhTO/4IqfOX7NGldCBi
zh26XqbqNUv9JUrSFj7yQTnetYoi0uOSdg4a1rrWsc0tSvEIYBRdZvvyGbq54+YG
dbKlja/3noBUk1kzwjGLSTnoNqpm3BH9clsKsMJj/YOTw2ik4nW1SNRJ5X8VIoji
2aJKxvFw/ep3Lk/fiE1BZ1g5xZ3yWzNOFicKPl1xDam0OCeSzRZ8iaNbORR2k4HL
RitO9ouPxokM0qdXqbY2ThFdoNkD01B0BWPiMDW35YLKZKnz/h1rh7G9a4WeIwkX
LaSf4zXnEz4HPEpkDNT/0+81mYd/K4Da82GHVaTL6yObJzG4xI47NjhK/Lt0GjpM
WsAul/i9Jaot4M9k2ABjEt83VPj550C/r0UgScDgxC0ZcoO1xQayHrKq+fttJRfk
HRUaPXwlQD2YC22yd4W+adrDac7jTdzVO65LUzVSnBzx4EEJ3TZB9C7pcvRj1H2x
6n4hjAA7ajtE5IwIKomM+pcCAwEAAQ==
-----END PUBLIC KEY-----`,
      padding: crypto.constants.RSA_PKCS1_PADDING
    },
    Buffer.from(stringData)
  );
  const encryptedData = bufferCriptografado.toString('base64');
  return encryptedData;
}
