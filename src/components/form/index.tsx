import { FC } from 'react';
import { Button, Container, Input, Typography } from '../ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './styles.module.css';
import { Checkbox } from '../ui/checkbox';

interface IForm {
  name: string;
  phone: string;
}

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
  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);

  return (
    <Container component="section">
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
