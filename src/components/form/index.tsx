import { FC } from 'react';
import { Button, Container, Input, Typography } from '../ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Checkbox } from '../ui/checkbox';
import styles from './styles.module.css';

interface IForm {
  name: string;
  phone: string;
}

const request = (data: IForm) => {
  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      agreement: false,
    },
  });
  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
    request(data);
  };

  return (
    <Container id="form" component="section">
      <Typography variant="h2" align="center" className={styles.title}>
        Отправь форму
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          id="name"
          label="Имя"
          {...register('name', { required: true, maxLength: 20 })}
          error={errors.name && 'Укажите имя, длинной максимум 20 символов'}
        />
        <Input
          id="phone"
          label="Номер телефона"
          {...register('phone', { required: true })}
          error={errors.phone && 'Укажите номер телефона'}
        />
        <Checkbox
          id="agreement"
          label="Согласен, отказываюсь"
          {...register('agreement', { required: true })}
          error={errors.agreement && 'Согласие обязательно'}
        />
        <Button type="submit">Отправить</Button>
      </form>
    </Container>
  );
};
