# Python solution for 2025-09-20
# File Storage
def number_of_files(file_size, file_unit, drive_size_gb):
    conversion = {
        'B': 1,
        'KB': 1_000,
        'MB': 1_000_000,
        'GB': 1_000_000_000
    }

    return (drive_size_gb * conversion['GB']) // (file_size * conversion[file_unit])